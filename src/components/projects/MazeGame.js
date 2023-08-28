import ProjectTemplate from "./ProjectTemplate";
import MazeImg from "../../images/Maze.png";
import ProjectDescription from "./ProjectDescription";
import ProjectLinks from "./ProjectLinks";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const BusinessDashboard = () => {
  return (
    <ProjectTemplate img={MazeImg} title="Maze Game" data-aos="fade-right">
      <ProjectDescription>
        A Maze Experiment Project with randomly generated mazes (implemented
        using Prim's algorithm with random selection) testing the efficiency of
        search traversal algorithms such as DFS, BFS, and heuristic-based search
        algorithms (eg. A*) in finding the optimal path from the maze entrance
        to exit.
      </ProjectDescription>
      <ProjectLinks
        links={[
          {
            link: "https://github.com/Kappaed/maze-traversal",
            icon: <FiGithub />,
          },
          {
            link: "https://statuesque-fairy-3d3889.netlify.app/",
            icon: <FiExternalLink />,
          },
        ]}
      />
    </ProjectTemplate>
  );
};

export default BusinessDashboard;
