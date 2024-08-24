import { category } from "../../data/category";

import Box from "@mui/material/Box";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Categore() {
  const [search, setsearch] = useState("");

  return (
    <div>
      <Box sx={{ marginTop: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div></div>
          <input
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            type="text"
            placeholder="search"
            style={{
              border: "1px solid black",
              width: "80%",
              height: "40px",
              borderRadius: "20px",
              padding: "10px",
            }}
          />
          <div></div>
        </Box>
      </Box>

      <div
        style={{ marginTop: "30px", height: "100%" }}
        className="flex flex-wrap items-center justify-center"
      >
        {category
          .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
          .map((e) => {
            return (
              <div key={e.id} className="p-4 w-80 rounded-2xl">
                <Card
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                  className="p-2"
                >
                  <img
                    src={e.image}
                    alt=""
                    style={{
                      objectFit: "contain",
                      height: "200px",
                      width: "100%",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem harum corrupti, minus, voluptate perferendis
                      debitis optio eligendi, saepe voluptatem numquam
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Categore;
