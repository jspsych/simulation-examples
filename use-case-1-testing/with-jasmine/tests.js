describe("snarc experiment", () => {
  it("contains an equal number of all trial types", async () => {
    const data = await simulateExperiment();

    const all_equal = [
      { parity: "odd", magnitude: "small" },
      { parity: "odd", magnitude: "large" },
      { parity: "even", magnitude: "small" },
      { parity: "even", magnitude: "large" },
    ]
      .map((properties) => data.filter(properties).count())
      .every((value, i, array) => {
        return value === array[0];
      });

    expect(all_equal).toBeTrue();
  });

  it("loops if the instructions check is failed", async () => {
    let first_time = true;

    const simulation_options = {
      odd_key: {
        data: {
          response: () => {
            if (first_time) {
              first_time = false;
              return 1;
            } else {
              return 0;
            }
          },
        },
      },
      even_key: {
        data: {
          response: 1,
        },
      },
    };

    const data = await simulateExperiment(simulation_options);

    const looped = data.filter({ task: "instructions-check" }).count() > 2;

    expect(looped).toBeTrue();
  });

  it("does not loop if the instructions check is passed", async () => {
    const simulation_options = {
      odd_key: {
        data: {
          response: 0,
        },
      },
      even_key: {
        data: {
          response: 1,
        },
      },
    };

    const data = await simulateExperiment(simulation_options);

    const looped = data.filter({ task: "instructions-check" }).count() > 2;

    expect(looped).toBeFalse();
  });
});
