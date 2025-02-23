import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

type Task = {
  id: number;
  title: string;
  description: string;
};

const dummyTasks: Task[] = [
  { id: 1, title: "タスク 1", description: "タスク1の説明" },
  { id: 2, title: "タスク 2", description: "タスク2の説明" },
  { id: 3, title: "タスク 3", description: "タスク3の説明" },
];

const TaskList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {dummyTasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {task.title}
              </Typography>
              <Typography variant="body2">{task.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">詳細</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
