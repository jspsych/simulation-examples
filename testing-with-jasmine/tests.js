describe("snarc experiment", () => {
  it("contains an equal number of all trial types", async () => {
    const data = await simulateExperiment();

    const all_equal = [
      data.filter({ parity: "odd", magnitude: "small" }).count(),
      data.filter({ parity: "odd", magnitude: "large" }).count(),
      data.filter({ parity: "even", magnitude: "small" }).count(),
      data.filter({ parity: "even", magnitude: "large" }).count(),
    ].every((value, i, array) => {
      return value === array[0];
    });

    expect(all_equal).toBe(true);
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

    expect(looped).toBe(true);
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

    expect(looped).toBe(false);
  });
});
