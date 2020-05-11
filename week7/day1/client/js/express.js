import { response } from "express";

fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(json => console.log(json))