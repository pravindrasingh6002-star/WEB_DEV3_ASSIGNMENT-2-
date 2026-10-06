import express from "express";
import students from "../data/student.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.json(students);
});


router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});


router.post("/", (req, res) => {
    const { name, course, age, email } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        course,
        age,
        email
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});


router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students[index] = {
        ...students[index],
        ...req.body
    };

    res.json(students[index]);
});

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});

export default router;