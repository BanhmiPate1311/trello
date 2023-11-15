import AppsIcon from "@mui/icons-material/Apps";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import ModeSelect from "~/components/ModeSelect";
// import trello from "~/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

const AppBar = () => {
  return (
    <Stack
      px={2}
      // bgcolor="primary.light"
      width="100%"
      height={(theme) => theme.trello.appBarHeight}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Stack direction="row" alignItems="center" gap={0.5}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="body1"
            color="initial"
            fontSize="1.2rem"
            fontWeight="bold"
          >
            Trello
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <ModeSelect />
      </Box>
    </Stack>
  );
};

export default AppBar;
