# Swiftor - Penetration Testing as a Service

## Project Overview:
Swiftor is a cloud-based Penetration Testing as a Service (PAAS) application aimed at simplifying and enhancing the penetration testing process. Leveraging CVE, OWASP, and ExploitDB databases, Swiftor enables users to generate comprehensive penetration test reports directly from their browser. The platform incorporates AI for report analysis and integrates Vulhub for hands-on training through vulnerable virtual machines (VMs).

![Logic](/public/logic.webp "Logic Visualization")

## Key Features:
- **Penetration Test Report Generation:** Users can generate detailed penetration test reports utilizing CVE, OWASP, and ExploitDB databases. The platform facilitates easy upload of findings and proof of concepts (POC) directly onto the application.
- **Containerized Application:** Swiftor operates as a Docker container, ensuring easy deployment and scalability.
- **AI-driven Report Analysis:** An AI module analyzes findings and generates text for the reports, streamlining the reporting process.
- **Vulnerable VM Deployment:** Users can spin up vulnerable VMs using Vulhub to practice and enhance their hacking skills. The VM deployment is managed separately from the main application.

### Production Build Workflow:
- Landing Page with Purchasing System and Login Page
- Payment Integration (Stripe or Ethereum)
- Creation of Default User VM Post-Payment
- Docker Container Initialization (Swiftor)
- Project Creation and Management for Penetration Tests
- VM Deployment for Penetration Testing (HackerX)
- PDF Report Download with AI-generated Content

### User Interface Design:
- **Panels and Tabs for Flexibility:** Users can arrange windows for PDF rendering, Swiftor editor, and HackerX VMs similar to VSCode.
- **Integrated AI Module:** The AI functionality is seamlessly integrated into the Swiftor editor.
- **Clusterized Architecture:** Each user's default VM, HackerX VMs, and training clusters are separate entities to ensure isolation and scalability.

```
+---------------+----------------------------+---------+---------+
|   sidemenu    | Swiftor v1                 |         |         |
|               | [ProjectName]              | vnc tab | ssh tab |
+---------------+----------------------------+---------+---------+
| reports       | Swiftor PDF Builder        |                   |
| templates     |                            |                   |
| data          |                            |                   |
| upgrades      |                            |                   |
|               |                            +---------+---------+
| VM specs      | ...                        | Swiftor PDF RENDER|
|               |                            +---------+---------+
|               |                            |                   |
|               |                            |                   |
|               |                            |                   |
| Logout button |                            |                   |
+---------------+----------------------------+---------+---------+

```

## Technology Stack:
- **Frontend:** HTML, CSS, JavaScript (React/Vue.js)
- **Backend:** Node.js, Express.js
- **Containerization:** Docker
- **AI Integration:** Python (TensorFlow, PyTorch)
- **VM Management:** Kubernetes
- **PDF Generation:** Petereport (open-source PDF generator)

## Project Management:
- **Agile Development Methodology:** Utilize sprints to incrementally develop and iterate on features.
- **Version Control:** Git for collaborative development and version management.
- **Continuous Integration/Continuous Deployment (CI/CD) Pipeline:** Automate testing and deployment processes for seamless updates.

## Conclusion:
Swiftor aims to revolutionize the penetration testing process by offering a comprehensive, user-friendly platform that combines advanced technology with intuitive design. With its containerized architecture, AI-driven analysis, and integrated VM deployment, Swiftor empowers users to conduct effective penetration tests and enhance their cybersecurity skills.



---
### Prompt
```js
Lets make a PAAS application called Swiftor. Swiftor is a cloud computing application that allows users to generate penetration test reports directly from their browser. By using CVE, OWASP and ExploitDB, it helps testers render graphs, upload findings and POC directly onto the application. . I want this portion to be an easily spinable docker container.

There will be ai that analyses each finding from type and generates text for the reports. With the help of Vulhub, the platform also helps hackers spin up vulnerable virtual machines to practice, train and better their hacking skills. The hacking Vm is another cluster on the VM


Here is how the production build should operate like:
1 - Landing page has a purchasing system as well as login page
2 - after payment using stripe or maybe eth, the system creates a default user VM which runs the docker container.
3 - the docker container is Swiftor which asks to fill in user information and allows to create projects (reports). each project has an option to allows users to spin up a VM using customizeable hardware specs and choose from a list of operating systems such as Kali. This is called HackerX which helps testers run peneration tests in their browser (we need to manage networking for this)
4 - users can download the pdfs of their pentest reports which they filled in using AI.



I want to use panels and tabs so the users can move the windows around for pdf render, swiftor editor and hackerX vm's. the ai is integrated in the editor. The tabs i am talking about are similar to vscode tabs and panels. 

The entire application is clusterized. The user's default vm (upon signup) is a seperate virtualization cluster of 2gb storage, 512mb ram and 2vCPU. The HackerX is tailored and customizable but still a seperate cluster. The training cluster is global and community based. users can hack the same box if its live but still seperate cluster. I am not sure if cluster is the right word, maybe container is but you get the point. its seperated. 

I am thinking of using PCF or petereport from github which are both open source pdf generators but i still need tro build a Swiftor dashboard with HackerX features etc.
```

## Reference

| Library      | Link                                              | Description                              |
|--------------|---------------------------------------------------|------------------------------------------|
| PrimeReact   | [Menu](https://primereact.org/menu/)             | PrimeReact Menu Component Documentation |
| PrimeReact   | [TabView](https://primereact.org/tabview/)       | PrimeReact TabView Component Documentation |
| PrimeReact   | [ConfirmPopup](https://primereact.org/confirmpopup/)       | PrimeReact ConfirmPopup Component Documentation |
| PrimeReact   | [Icons](https://primereact.org/icons/)           | PrimeReact Icons Component Documentation |
| PrimeReact   | [Splitter](https://primereact.org/splitter/)     | PrimeReact Splitter Component Documentation |
| PrimeReact   | [Apollo](https://apollo.primereact.org/apps/blog/list) | Apollo PrimeReact Application Blog List |
| Github       | [PwnDoc](https://github.com/pwndoc/pwndoc)       | PwnDoc GitHub Repository                 |
| Github       | [PeTereport](https://github.com/1modm/petereport)| PeTereport GitHub Repository             |