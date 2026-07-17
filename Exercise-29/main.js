
    async function fetchStudentData() {
        console.log("Fetching student information");
        
        const response = await fetch('data.json');

        const studentData = await response.json();

        console.log(studentData);
    }

    fetchStudentData();