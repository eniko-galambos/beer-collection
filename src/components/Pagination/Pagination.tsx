import { Box, IconButton, Typography } from '@mui/material';
import IconChevronLeft from '@mui/icons-material/ChevronLeft';
import IconChevronRight from '@mui/icons-material/ChevronRight';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(Number(searchParams.get('page')));
  }, [searchParams]);

  const handleClickPrev = () => {
    setSearchParams({ page: String(page - 1) });
    setPage((prev) => prev - 1);
  };

  const handleClickNext = () => {
    setSearchParams({ page: String(page + 1) });
    setPage((prev) => prev + 1);
  };

  return (
    <Box
      component="nav"
      sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}
      aria-label="Page navigation"
    >
      <Box
        component="ul"
        sx={{
          display: 'inline-flex',
          listStyleType: 'none',
          alignItems: 'center',
        }}
      >
        <li>
          <IconButton
            onClick={handleClickPrev}
            disabled={page <= 1}
            aria-label="Previous"
          >
            <IconChevronLeft />
          </IconButton>
        </li>
        <li>
          <Typography sx={{ ml: 2, mr: 2 }}>{page}</Typography>
        </li>
        <li>
          <IconButton onClick={handleClickNext}>
            <IconChevronRight />
          </IconButton>
        </li>
      </Box>
    </Box>
  );
};

export default Pagination;
