const congruent_rt_mu = 500;
const congruent_rt_sd = 100;
const congruent_rt_tau = 1 / 100;
const congruent_p_correct = 0.9;

const incongruent_rt_mu = 600;
const incongruent_rt_sd = 100;
const incongruent_rt_tau = 1 / 100;
const incongruent_p_correct = 0.7;

const p_speedy_subject = 0.1;

const speedy_rt_mu = 100;
const speedy_rt_sd = 20;
const speedy_rt_tau = 1 / 20;

function create_simulation_options(jsPsych) {
  const simulation_options = {
    congruent: {},
    incongruent: {},
  };
  if (Math.random() > p_speedy_subject) {
    simulation_options.congruent.data = {
      response: () => {
        const correct_response = jsPsych
          .timelineVariable("color")
          .substring(0, 1);
        const incorrect_response = jsPsych.randomization.shuffle(
          ["r", "g", "b"].filter((x) => x !== correct_response)
        )[0];
        if (Math.random() < congruent_p_correct) {
          return correct_response;
        } else {
          return incorrect_response;
        }
      },
      rt: () => {
        return jsPsych.randomization.sampleExGaussian(
          congruent_rt_mu,
          congruent_rt_sd,
          congruent_rt_tau,
          true
        );
      },
    };

    simulation_options.incongruent.data = {
      response: () => {
        const correct_response = jsPsych
          .timelineVariable("color")
          .substring(0, 1);
        const incorrect_response = jsPsych.randomization.shuffle(
          ["r", "g", "b"].filter((x) => x !== correct_response)
        )[0];
        if (Math.random() < incongruent_p_correct) {
          return correct_response;
        } else {
          return incorrect_response;
        }
      },
      rt: () => {
        return jsPsych.randomization.sampleExGaussian(
          incongruent_rt_mu,
          incongruent_rt_sd,
          incongruent_rt_tau,
          true
        );
      },
    };
  } else {
    simulation_options.congruent.data = {
      rt: () => {
        return jsPsych.randomization.sampleExGaussian(
          speedy_rt_mu,
          speedy_rt_sd,
          speedy_rt_tau,
          true
        );
      },
    };
    simulation_options.incongruent.data = {
      rt: () => {
        return jsPsych.randomization.sampleExGaussian(
          speedy_rt_mu,
          speedy_rt_sd,
          speedy_rt_tau,
          true
        );
      },
    };
  }

  return simulation_options;
}
