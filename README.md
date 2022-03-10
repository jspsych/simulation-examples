# Simulating Behavior to Help Researchers Build Experiments

This repository contains the code for the examples described in our paper on building a tool for automatically simulating participant behavior in jsPsych.

> de Leeuw, J. R., Gilbert, R. A., Petrov, N., Luchterhandt, B. (2022). Simulating Behavior to Help Researchers Build Experiments. *PsyArXiv*, [link here](#).

The paper describes the motivation for and implementation of a tool that allows researchers to automatically simulate participant behavior for most jsPsych experiments. It covers four scenarios where we think this functionality is useful.

## Use Case 1: Automated Testing

Researchers can use simulation mode to automatically test the behavior of experiments under different conditions.

**Example 1: Testing Manually**. This example involves running an experiment with an instructions comprehension check. The test verifies that when the subject fails the comprehension check, the instructions are repeated. The test also verifies that the correct number of trials appear after randomization. [Code](), [Live Demo]().

**Example 2: Testing with a Framework**. This example uses the same experiment, but uses the Jasmine testing library to run the tests. [Code](), [Live Demo]().

## Use Case 2: Generating Simulated Datasets

Simulation can be used to generate datasets that will have the same exact structure as the final data, ensuring that analysis scripts built prior to data collection will work properly. Customizing the parameters of the simulation also allows the researcher to generate datasets with known properties, such as effect sizes or the frequency of outliers.

**Example: Customizing Parameters**. This simulation of a Stroop task uses the `simulation_options` and a [configuration file]() to control the response time distributions for incongruent and congruent trials. It also includes a parameter to control the probability that a subject will be inattentive and just respond as quickly as possible to everything. [Code](), [Live Demo]().

## Use Case 3: Speeding Up Development

When building experiments it can be helpful to skip over portions of the experiment that are already complete to test the piece that is being actively developed. In some cases, earlier portions of the experiment can simply be commented out, but sometimes there are complex dependencies where the piece under development depends on information generated during a previous section. Simulation can help by simulating *part* of an experiment, generating the data that is needed to test a later portion.

**Example: Developing a Feedback Screen**. This example simulates a visual search task but skips the simulation for the final feedback screen, allowing the researcher to get quick feedback on changes being made to that piece of the experiment. [Code](), [Live Demo]().

## Use Case 4: Visualizing Participant Behavior

jsPsych's simulation mode can execute in two modes. In all the other examples we used `data-only` mode, which generates simulated data quickly without running the actual trials. The other option, `visual` mode, runs the experiment in real time so that the researcher can watch the experiment progress. This has a variety of potential uses, such as a rapid timelapse-style playthrough of the experiment for demo purposes, but here we highlight one particularly intriguing possibility: the ability to "playback" participant behavior. By running the simulation with parameters taken from a an actual run of the experiment, the visual simulation becomes a movie of what a participant actually did in the experiment.

**Example: Replaying a Serial Response Time Task**. This example requires you to complete the short experiment, after which your behavior will be played back to you via simulation. [Code](), [Live Demo]().



