# Load-testing-with-Jmeter
In the company OrangeHRM [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login] has a portal for its employees and candidates, the highest traffic is concentrated in the first 2 working hours, where concurrent users can reach 65 users in 20 seconds; however, if this time is extended, there may be delays in transactions and unavailability of the service.

The main bottlenecks are in the search for related personnel and in the registration of new candidates for the company.

## System requirements

- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.
- Java version 8 or higher, quad-core processor or higher. 4 gb ram memory, minimum 1gb storage. 

## Aplications to install

- install Jmeter 5.6.3 or up https://jmeter.apache.org/download_jmeter.cgi


- Download and Install the Plugins Manager
1. Go to the JMeter Plugins Manager download page, Download the JMeterPlugins-Manager-x.x.jar file. https://jmeter-plugins.org/wiki/PluginsManager/
2. Place the JAR file in the correct directory:

- Copy the JMeterPlugins-Manager-x.x.jar file into the lib/ext directory of your JMeter installation. For example, if JMeter is installed in /Applications/apache-jmeter-5.4.1, place the file in /Applications/apache-jmeter-5.4.1/lib/ext.

3. Start JMeter:

- Open JMeter. You should see a new menu called “Plugins” in the menu bar.
Use the Plugins Manager to Install Plugins.


## Preparation of the environment for testing

### Objective of load testing
load testing is aimed at evaluating how a system, application or service handles an expected workload over a given period of time. This type of testing is a crucial part of quality assurance (QA) and focuses on several key aspects:

- Performance under Load: Verify how the system performs when subjected to normal and maximum expected load. This includes measuring response times, error rates, and the overall behavior of the system.

- Bottleneck Identification: Detect parts of the system that become critical points or limitations as the load increases. This can include issues in the database, web server, network, or application code.

- Scalability: Assess the system's ability to scale and handle an increase in workload. This can help determine if more resources need to be added or if code optimization is needed to improve performance.

- Stability and Reliability: Ensure the system remains stable and does not fail under high loads. This is crucial for applications that require high availability and reliability.

- Maintainability: Identify if the system can continue to function correctly during prolonged periods of continuous use, which is vital for services that need to be operational 24/7.

- Comparison with Requirements: Verify that the system meets the performance requirements specified in the documentation or service level agreements (SLAs).

- Preparation for Traffic Spikes: Simulate scenarios where unexpected traffic spikes occur, such as during marketing campaigns, special events, or promotions, to ensure the system can handle them without issues.

### Scope of Load Testing
Evaluate the performance of the OrangeHRM HR portal under expected load conditions, identify bottlenecks and ensure that the system can handle the workload without impacting the user experience.

#### Functional Areas Covered:

User Authentication:
Login and Logout.

Applicant Module:
New candidate registration.
Candidate search and filtering.

### Types of Tests:

#### Load and stress Testing:
- Load simulation with up to 65 concurrent users during the first 2 business hours.
- Increasing load scenarios to identify failure points.


#### Tools:

- #### Load testing tool: JMeter.

JMeter for load testing offers multiple advantages that make it a popular and effective tool for load testing in quality assurance (QA) projects.
Main reasons to use JMeter for load testing:

- Open Source and Free
- Extensive Load Simulation Capability
- Ease of Use and Configuration
- Detailed Reporting and Analysis

### Success and Acceptance Criteria:

- Stability: The system must remain stable with no crashes during load and peak testing.
- The average response time for new candidate registration should be less than 5 seconds.
- The average response time for the search of related personnel should be less than 3 seconds.
- La tasa de éxito de las transacciones debe ser alta (mínimo 95%).


### Test Execution

#### Test Configuration: 
1. run Jmeter and load the .jmx file containing the load test plan.
2. identify the configuration element called user defined variable, inside it there is a variable called COOKIE, which has no defined value and must be assigned. to assign value to this variable we must go to the site under test (https://opensource-demo.orangehrmlive.com/web/index.php/auth/login), login and once inside the portal right click on inspect site. there, we go to the network tab and filter by documents and click on the last one we loaded and in the request header section we choose the row where the session cookie is.
- Cookie: orangehrm=**a521dbed4d964ac68b329bd55f4d4472**
- We only have to select the hash after the = sign and copy it, after that we paste it as value in our COOKIE variable.
3. If this is done successfully, it will be possible to run all the tests contained in the test plan of the .jmx file.

#### Process Description: 
A load and stress test will be conducted on the described features that are experiencing service delays and bottlenecks (personnel search and adding new personnel). Additionally, the same will be done for the login feature, as incidents occur during the first hours of work, where this module is the first exposed to the public and could present failures or service denial.

1. A load test will be conducted for the three features, each with 65 threads (users) within a time frame of 20 seconds.
2. A load test will be conducted for the three features, each with 100 threads (users) within a time frame of 20 seconds. This is to analyze the behavior of the site under increased load.
3. A load and stress test will be conducted for the three features using the ramping methodology, gradually increasing and sustaining the load. In the first second, 20 threads will start, at the third second 25 more threads will be added, and at the fifth second 20 more threads will be sent. This will be sustained for 20 seconds and finally will end gradually in 4 seconds.
4. These tests will be carried out in the production environment and using the apache jmeter tool.

#### Data Collected:
- simple listener was used to collect test result data, which exports the results in .csv files with detailed information (response times, error rates and percentages, graphs, latency, etc.).

- The .csv files were converted to HTML reports using apache jmeter report generation options to facilitate the compression of the results.

- ##### HTML Reports - Command Execution

1. Open your terminal and navigate to the directory where JMeter is installed, typically something like ```/Applications/apache-jmeter-5.x.x /bin:```

2. Run the report generation command.
```./jmeter -g “path to the .csv file” -o “path or directory where the HTML report is to be generated.”```

### Analysis: 
```Login 
Total requests: 434
Successful requests: 325
Failed requests: 109
Failure rate: 25.1%.
Average response time: 1122 ms
Maximum response time: 5110 ms
```
```
Search users 
Total requests: 797
Successful requests: 343
Failed requests: 454
Failure rate: 57.1%.
Average response time: 1117 ms
Maximum response time: 7143.98 ms
```
```
User registration 
Total requests: 495
Failure rate: 76.77%.
Average response time: 1117 ms
Maximum response time: 717.725 ms
```
##### High Failure Rate:
Failure rates are significantly high, especially in the ramping scenario (RAMPING). This high error rate (mainly 503 codes) indicates that the server cannot handle the load.

##### Response Times:
Average response times are above 1 second for all scenarios, with peaks exceeding 5 seconds. For critical applications, these times are unacceptable and affect the user experience.

##### Bottlenecks:
Latencies and connection times indicate that servers have problems handling concurrent requests, especially in the ramp scenario where the number of threads gradually increases.
Detailed report with performance metrics, identification of bottlenecks and optimization suggestions.
Analysis of Results, Recommendations and Load Script:


### Recommendations
#### Server Optimization:

- Increase server capacity (CPU, memory) and optimize concurrent connection handling.

- Review and optimize web server and database configurations.

- Incorporate or improve the performance of requests to the server by means of a WAF, establishing rules that help mitigate the collapse of the service.

- Implement strategies such as load balancing and use of multiple server instances to distribute the load.

- Perform continuous load testing to monitor performance and adjust configurations in real time.

- Implement monitoring tools to identify and resolve bottlenecks quickly.

By implementing these recommendations, OrangeHRM can significantly improve its portal's ability to handle traffic during peak hours, ensuring a better user experience and service availability.
