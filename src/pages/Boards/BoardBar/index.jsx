import Box from "@mui/material/Box";

const BoardBar = () => {
  return (
    <Box
      bgcolor="primary.dark"
      width="100%"
      height={(theme) => theme.trello.BoardBarHeight}
      display="flex"
      alignItems="center"
    >
      Board
    </Box>
  );
};

export default BoardBar;
