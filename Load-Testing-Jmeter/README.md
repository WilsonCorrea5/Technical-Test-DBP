# Load-testing-with-Jmeter
In the company OrangeHRM [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login] has a portal for its employees and candidates, the highest traffic is concentrated in the first 2 working hours, where concurrent users can reach 65 users in 20 seconds; however, if this time is extended, there may be delays in transactions and unavailability of the service.

The main bottlenecks are in the search for related personnel and in the registration of new candidates for the company.


## Objective of load testing
load testing is aimed at evaluating how a system, application or service handles an expected workload over a given period of time. This type of testing is a crucial part of quality assurance (QA) and focuses on several key aspects:

- Performance under Load: Verify how the system performs when subjected to normal and maximum expected load. This includes measuring response times, error rates, and the overall behavior of the system.

- Bottleneck Identification: Detect parts of the system that become critical points or limitations as the load increases. This can include issues in the database, web server, network, or application code.

- Scalability: Assess the system's ability to scale and handle an increase in workload. This can help determine if more resources need to be added or if code optimization is needed to improve performance.

- Stability and Reliability: Ensure the system remains stable and does not fail under high loads. This is crucial for applications that require high availability and reliability.

- Maintainability: Identify if the system can continue to function correctly during prolonged periods of continuous use, which is vital for services that need to be operational 24/7.

- Comparison with Requirements: Verify that the system meets the performance requirements specified in the documentation or service level agreements (SLAs).

- Preparation for Traffic Spikes: Simulate scenarios where unexpected traffic spikes occur, such as during marketing campaigns, special events, or promotions, to ensure the system can handle them without issues.

## Scope of Load Testing
Evaluate the performance of the OrangeHRM HR portal under expected load conditions, identify bottlenecks and ensure that the system can handle the workload without impacting the user experience.

### Functional Areas Covered:

User Authentication:
Login and Logout.

Applicant Module:
New candidate registration.
Candidate search and filtering.

### Types of Tests:

#### Load Testing:
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

Stability: The system must remain stable with no crashes during load and peak testing.

Analysis of Results, Recommendations and Load Script:

Analysis: Detailed report with performance metrics, identification of bottlenecks and optimization suggestions.
Recommendations: Specific proposals to improve performance, such as database query optimization and server configuration adjustments.

## System requirements

- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.
- Java version 8 or higher, quad-core processor or higher. 4 gb ram memory, minimum 1gb storage. 

## Aplications to install

- install Jmeter 5.6.3 or up https://jmeter.apache.org/download_jmeter.cgi


