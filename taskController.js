let tasks = [];

const createTask = (req, res) => {
  const { text, completed, deadline } = req.body;

const newTask = {
  id: Date.now().toString(),
  text,
  completed: completed || false,
  deadline: deadline || 'No Deadline',
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
  };

  const getTasks = (req, res) => {
    res.status(200).json(tasks);
  };

  const deleteTask = (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task.id !==id);
    res.json({message: `Task with id ${id} deleted` });
  };

  module.exports = {
    createTask,
    getTasks,
    deleteTask,
  };
