import React, { useEffect, useState } from "react";
import "./pagination.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({ count, currentPage, onPageChange }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    const handleChange = (event, value) => {
        onPageChange(value);
    };

    return (
        <div className="pagination">
            <Stack spacing={2}>
                <Pagination
                    size={windowWidth <= 400 ? "small" : windowWidth <= 500 ? "medium" : "large"}
                    page={currentPage}
                    count={count}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                />
            </Stack>
        </div>
    );
};

export default PaginationComponent;
