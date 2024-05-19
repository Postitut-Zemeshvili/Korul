
function langClick (lang)
{
    window.location.href = "./" + lang + "_site";
}

function backClick ()
{
    window.location.href = "/";
}

function goToBase ()
{
    window.location.href = "base_post"
}

// function addComment (filename)
// {
//     const content = document.getElementById(filename + "-comment-text").value;
//     const date = new Date ();
    
//     a = document.createElement("a");
    
//     const line = uuid + "," + filename + "," + content + "," + date.getYear() + "-" + date.getMonth() + "-" + date.getDay();
    
//     const file = path.join (__dirname, "comments.txt")
//     if (fs.existsSync(file)) // Checking that the file exists
//     {
//         fs.appendFile (file, "\n" + line, (error) => {
//             if (error) throw error;
//             console.log("Successfully appended comment.")
//         })
//     }
//     else // Creates a new file if one does not yet exist.
//     {
//         fs.writeFile (file, "<ID>,<FILE_NAME>,<CONTENT>,<DATE(YYYY-MM-DD)>\n" + line, (error) => {
//             if (error) throw error;
//             console.log ("Sucessfully created comments file.");
//         })
//     }
// }
