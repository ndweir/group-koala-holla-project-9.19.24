# KOALA HOLLA

## Description

Our goal with this project was to create a CRUD app to track the client's koalas. This app has the ability to add new koalas, delete koalas, mark koalas ready to be transferred, and to store all this information on a database.

## Screen Shot

![Koala Holla Interface](/koala_holla.png)

## Prerequisites

<li>Node.js</li>

## Installation

<ol>
<li>Create a database named <code>koala_database</code>,</li>
<li>The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,</li>
<li>Open up your editor of choice and run an <code>npm install</code></li>
<li>Run <code>npm start</code> in your terminal</li>
<li>Open your browser of choice and visit <a href="http://localhost:5001/">localhost:5001</a></li>
</ol>

## Usage

<ul>
<li>Enter koala information into the inputs and click "Add Koala" to add a new koala</li>
<li>Please note that "Transfer" takes a boolean value</li>
<li>Click the "Ready for Transfer" button to mark a koala ready to be transferred</li>
<li>Click the "Delete" button to delete a koala from the table</li>
</ul>

## Built With

<li>Node.js</li>
<li>Postgres</li>
<li>Postico</li>
<li>Express.js</li>
<li>Axios.js</li>
<li>SweetAlert2</li>

## Acknowledgement

Thank you to Prime Digital Academy, Key, and Koalas. 