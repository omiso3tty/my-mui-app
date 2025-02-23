import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

export type Task = {
  id: number;
  title: string;
  description: string;
};

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "タスク 1", description: "タスク1の説明" },
    { id: 2, title: "タスク 2", description: "タスク2の説明" },
  ]);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <Box className="min-h-screen">
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1">
            Task Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="w-64"
        >
          <List>
            {["タスク一覧", "新規タスク"].map((text) => (
              <ListItem key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* メインコンテンツ */}
      <Box className="p-4 space-y-8">
        <Box>
          <Typography variant="h4" gutterBottom>
            タスク一覧
          </Typography>
          {/* タスク一覧コンポーネントに state で管理した tasks を渡す */}
          <TaskListCustom tasks={tasks} />
        </Box>
        <Box>
          <TaskForm onAddTask={handleAddTask} />
        </Box>
      </Box>
    </Box>
  );
};

// 先ほどの TaskList コンポーネントを tasks を props 経由で受け取るように修正
type TaskListProps = {
  tasks: Task[];
};

const TaskListCustom: React.FC<TaskListProps> = ({ tasks }) => (
  <Box>
    <Box display="flex" flexWrap="wrap" gap={2}>
      {tasks.map((task) => (
        <Box key={task.id} width={{ xs: "100%", sm: "45%", md: "30%" }}>
          <Box border={1} borderRadius={2} p={2}>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2">{task.description}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default App;
