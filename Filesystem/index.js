// Write a function to read all files in a directory recursively and return their paths as an array.
// (For example, given a directory structure, return ['dir/file1.txt', 'dir/subdir/file2.txt'].)

const fs = require("fs");
const path = require("path");
const readline = require("readline");

function ReadFiles(dir, files = []) {
  fs.readdirSync(dir).forEach((subdir) => {
    const filename = `${dir}/${subdir}`;
    if (fs.statSync(filename).isDirectory()) {
      ReadFiles(filename, files);
    } else {
      files.push(filename);
    }
  });
  return files;
}
let files = ReadFiles(
  "C:\\Users\\User\\Documents\\GitHub\\closures-hoisting-eventloop-Test-2024\\src"
);
//console.log(files);

// Implement a function to monitor changes in a file and log any modifications to the console in real time.

function monitorChanges(path) {
  fs.watch(path, (event, file) => {
    console.log(`File ${file} has been ${event}`);
    let data = fs.readFileSync(path, "utf8");

    console.log("\n\n" + data);
  });
}

//monitorChanges("file.txt");

// Write a program that reads a large file line by line without loading the entire file into memory.
// Explain why this approach is efficient.

function readLargeFile(filePath) {
  const fileStream = fs.createReadStream(filePath, { encoding: "utf8" });
  const rl = readline.createInterface({
    input: fileStream,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    console.log(line);
  });

  rl.on("close", () => {
    console.log("Finished...");
  });
}

const filePath = "./large-file.txt";
//readLargeFile(filePath);

// The approach of is efficient because it processes only small chunks of the file at a time,
// never holding the entire content in memory. It is asynchronous, allowing the program to handle
// other tasks while reading the file

// ----------------------------------------------------------------------------------------------------

// Create a function that writes JSON data to a file. If the file already exists, append the new data
// without overwriting the existing content.

function writeJsonData(filePath, newData) {
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }

      let UpdatedData = JSON.parse(data);
      UpdatedData.push(newData);

      fs.writeFile(filePath, JSON.stringify(UpdatedData, null, 2), (err) => {
        if (err) {
          console.error("Error writing to the file:", err);
        } else {
          console.log("Data appended successfully!");
        }
      });
    });
  } else {

    fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log("File created and data written successfully!");
      }
    });
  }
}

let data = {
  name: "hur",
  age: 22,
};
writeJsonData("file.json", data);

// How would you handle reading and writing files concurrently in Node.js to prevent data corruption? Write an example that safely handles concurrent writes
