# k6
## About k6
k6 is an open source load testing tool to test the performance of APIs, microservices, and websites. Developers use k6 to test a system’s performance under a particular load to catch performance regressions or errors

## Features
- Creating Tests
- Configuring the Load
- Sample report


## Project structure
specs -> Contains all the Test Scripts and test results will be generated

## Reports
- HTML report


Get Started
Setup:
- Access to this URL -https://grafana.com/docs/k6/latest/set-up/install-k6/
- Use Download and run the latest official installer for Windows
- Open Command promt and type k6
- Go to the terminal in vs code and type below command -To execute single test
```
 k6 run <spec name/filename>
````
- To get the report run below command
```
 k6 run <spec name/filename> --out json=test.json
````