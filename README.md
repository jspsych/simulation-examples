# Simulating Behavior to Help Researchers Build Experiments

This repository contains the code for the examples described in our paper on building a tool for automatically simulating participant behavior in jsPsych.

> de Leeuw, J. R., Gilbert, R. A., Petrov, N., Luchterhandt, B. (2022). Simulating Behavior to Help Researchers Build Experiments. *PsyArXiv*, [link here](#).

The paper describes the motivation for and implementation of a tool that allows researchers to automatically simulate participant behavior for most jsPsych experiments. It covers four scenarios where we think this functionality is useful.

## Use Case 1: Automated Testing

Researchers can use simulation mode to automatically test the behavior of experiments under different conditions.

**Example 1: Testing Manually**. This example involves running an experiment with an instructions comprehension check. The test verifies that when the subject fails the comprehension check, the instructions are repeated. The test also verifies that the correct number of trials appear after randomization. [Code](), [Live Demo]().

**Example 2: Testing with a Framework**. This example uses the same experiment, but uses the Jasmine testing library to run the tests. [Code](), [Live Demo]().

