import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

type TaskFormProps = {
  onAddTask: (title: string, description: string) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="space-y-4">
      <Typography variant="h5">新規タスクの追加</Typography>
      <TextField
        fullWidth
        label="タイトル"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="説明"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        追加
      </Button>
    </Box>
  );
};

export default TaskForm;
