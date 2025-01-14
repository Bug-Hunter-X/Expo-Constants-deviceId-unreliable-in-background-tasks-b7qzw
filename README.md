# Expo Constants.deviceId unreliability in background tasks

This repository demonstrates a bug where Expo's `Constants.deviceId` returns an unexpected value or `undefined` when accessed within a background task or service worker.  This is due to the device ID's association with the foreground app instance.

The `backgroundTaskBug.js` file shows how the issue manifests.  The `backgroundTaskSolution.js` file provides a potential workaround that involves storing the device ID persistently upon app launch and accessing it later from storage in background tasks.

## Reproduction

1. Clone this repository.
2. Run the project using Expo Go or similar.
3. Observe the console output.  The `deviceId` might vary or be undefined in the background task, while it behaves as expected in the foreground. 

## Solution

This is a workaround; there's no ideal solution within Expo for accessing a consistent `deviceId` across all contexts. The provided solution in `backgroundTaskSolution.js` emphasizes the need to store the `deviceId` in persistent storage and access it there instead.