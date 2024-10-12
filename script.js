/* General styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

/* Calculator container */
.calculator {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 30px;
    max-width: 350px;
    width: 100%;
    text-align: center;
}

h1 {
    font-size: 22px;
    color: #34495e;
    margin-bottom: 25px;
}

/* Input group styling */
.input-group {
    margin-bottom: 20px;
    text-align: left;
}

.input-group label {
    display: block;
    font-size: 14px;
    color: #2c3e50;
    margin-bottom: 8px;
}

.input-group input {
    width: 100%;
    padding: 12px;
    font-size: 15px;
    border: 2px solid #ecf0f1;
    border-radius: 6px;
    background-color: #ecf0f1;
    transition: all 0.3s ease;
}

.input-group input:focus {
    border-color: #1abc9c;
    outline: none;
    background-color: white;
    box-shadow: 0 0 8px rgba(26, 188, 156, 0.3);
}

/* Button styling */
button {
    width: 100%;
    background-color: #1abc9c;
    color: white;
    padding: 14px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #16a085;
}

/* Results section styling */
.results {
    margin-top: 30px;
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ddd;
}

.results p {
    font-size: 16px;
    color: #2c3e50;
    margin-bottom: 10px;
}

/* Responsive styling for smaller screens */
@media (max-width: 768px) {
    .calculator {
        padding: 20px;
    }
}
