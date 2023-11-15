import Box from "@mui/material/Box";

const BoardContent = () => {
  return (
    <Box
      bgcolor="primary.main"
      width="100%"
      height={(theme) =>
        `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.BoardBarHeight})`
      }
      display="flex"
      alignItems="center"
    >
      Content
    </Box>
  );
};

export default BoardContent;
