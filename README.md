# chat-bot
![image](https://github.com/user-attachments/assets/524c5d16-3ce0-499f-9310-07aa4dd26c28)

# 1. Problem Statement
The task is to develop a distributed chatbot system capable of facilitating real-time communication between users and a server. This system should use parallel and distributed computing concepts to handle multiple users, secure their communication, and implement basic fault tolerance. The chatbot should be designed with scalability in mind, capable of handling increasing numbers of concurrent users and requests.
The main challenges addressed by this system include:
####  •	Efficiently managing multiple client connections simultaneously.
####  •	Ensuring secure communication between the client and server.
####  •	Implementing a fault-tolerant system that can handle client disconnections or server errors without affecting overall service continuity.
####  •	Distributing tasks across multiple processes or servers to enhance system scalability and performance.

# 2. System Architecture and Design
The architecture of the system follows a client-server model where the client communicates with the server to exchange messages. The server handles requests from multiple clients using multi-threading for parallel task execution. The server also uses SSL/TLS encryption to ensure secure communication.
Architecture Components:
#### Client: A user-facing web interface that sends user input (queries) to the server. The client uses HTTP requests to interact with the server.
#### Server: A multi-threaded Python-based server that listens for client connections, processes queries, and sends back responses. It also handles the distribution of tasks across multiple processes or servers.
#### Database: The server stores chat history and user data in a database (e.g., SQLite or MySQL).
#### SSL/TLS Encryption: To secure communication between the client and server, ensuring that all messages are encrypted and protected from potential eavesdropping.
#### Fault Tolerance: If one of the servers or processes fails, the system automatically redistributes tasks to ensure uninterrupted service.
## Architecture Diagram:
This diagram shows the interaction between the client, server, database, and SSL/TLS layer.
![image](https://github.com/user-attachments/assets/8b409c43-0ef6-4ee4-a836-371516d829f8)


## System Workflow:
#### 1.User Input: The client sends a query to the server.
#### 2.Server Processing: The server handles the incoming request using multi-threading, processing the request in parallel.
#### 3.Response Generation: The server generates a response based on the input (it may access a database or use an AI model for this).
#### 4.Sending Response: The response is sent back to the client.
#### 5.Secure Communication: SSL/TLS encryption ensures that data sent between the client and server is secure.

# 3. Python Code Explanations
The system is implemented using Python, leveraging various libraries for multi-threading, secure communication, and database interaction. The following sections explain key parts of the code:
Server Implementation (server.py):

Client Implementation (client.py):
# 4. Test Cases and Results
## The system has been tested to ensure functionality and security.
Test Case 1: Client-Server Communication
#### Test: Send a message from the client ("What is malaria?") to the server.
#### Expected Result: The server returns "Malaria is a disease caused by a parasite transmitted by mosquitoes."
### Result: Pass.
## Test Case 2: Multiple Client Connections
#### Test: Simultaneously send requests from multiple clients.
#### Expected Result: The server handles multiple connections without errors, providing each client with an appropriate response.
### Result: Pass.
## Test Case 3: SSL/TLS Encryption
#### Test: Intercept the communication between client and server.
#### Expected Result: The data is encrypted, ensuring that the messages cannot be read without decryption.
###  Result: Pass.
## Test Case 4: Fault Tolerance (Server Failure Simulation)
#### Test: Simulate a server crash after handling a client request.
#### Expected Result: The system should be able to handle a restart and continue without data loss, as long as the database and application state are preserved.
### Result: Pass (after implementing basic error handling).

# Conclusion
The Distributed Chatbot System successfully meets the requirements of scalability, security, and fault tolerance. The system is capable of handling multiple clients simultaneously, processing messages in parallel, and ensuring secure communication. Future improvements can focus on expanding the chatbot's functionality with advanced natural language processing techniques and further enhancing fault tolerance for larger-scale systems.




