import ReactLogo from "../../../assets/logos/react.png";
import JSLogo from "../../../assets/logos/JS_logo.png";
import TSLogo from "../../../assets/logos/ts.png";
import NodeLogo from "../../../assets/logos/node.jpg";
import NextJSLogo from "../../../assets/logos/nextjs.svg";
import GraphQLLogo from "../../../assets/logos/graphql.png";
import GitLogo from "../../../assets/logos/GitLogo.png";
import TailwindLogo from "../../../assets/logos/TailwindLogo.png";
import ReduxLogo from "../../../assets/logos/ReduxLogo.png";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

export enum StackLogoNames {
  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
  REACT = "React",
  NODE = "Node",
  NEXT = "Next",
  GRAPHQL = "GraphQL",
  TAILWIND = "Tailwind",
  GIT = "Git",
  REDUX = "Redux",
}

const StackLogos = {
  [StackLogoNames.JAVASCRIPT]: {
    imageSrc: JSLogo,
    primary: "JavaScript",
    secondary: "6+ years.",
  },
  [StackLogoNames.TYPESCRIPT]: {
    imageSrc: TSLogo,
    primary: "TypeScript",
    secondary: "4+ years.",
  },
  [StackLogoNames.REACT]: {
    imageSrc: ReactLogo,
    primary: "React",
    secondary: "4+ years.",
  },
  [StackLogoNames.NEXT]: {
    imageSrc: NextJSLogo,
    primary: "Next JS",
    secondary: "1+ years.",
  },
  [StackLogoNames.NODE]: {
    imageSrc: NodeLogo,
    primary: "Express JS",
    secondary: "4+ years.",
  },
  [StackLogoNames.GRAPHQL]: {
    imageSrc: GraphQLLogo,
    primary: "GraphQL",
    secondary: "3+ years.",
  },
  [StackLogoNames.GIT]: {
    imageSrc: GitLogo,
    primary: "Git",
    secondary: "6+ years.",
  },
  [StackLogoNames.TAILWIND]: {
    imageSrc: TailwindLogo,
    primary: "Git",
    secondary: "3+ years.",
  },
  [StackLogoNames.REDUX]: {
    imageSrc: ReduxLogo,
    primary: "React Redux",
    secondary: "3+ years.",
  },
};

interface TechStackLogoProps {
  logoName: StackLogoNames;
  showHelperText?: boolean;
}

export const TechStackLogo = ({
  logoName,
  showHelperText = true,
}: TechStackLogoProps) => {
  if (!logoName) return <></>;
  const currentLogo = StackLogos[logoName];
  if (!currentLogo) return <></>;
  return (
    <List className="grid grid-cols-2">
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "white", height: "25px", width: "25px" }}>
              <img alt="" src={currentLogo.imageSrc} />
            </Avatar>
          </ListItemAvatar>
          {showHelperText && (
            <ListItemText
              primary={currentLogo.primary}
              secondary={currentLogo.secondary}
            />
          )}
        </ListItem>
      </div>
    </List>
  );
};
