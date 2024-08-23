import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Titlepages({title}) {
  return (
    <div>
      <Typography variant="h5" className="text-blue-500 pl-12 ">
        {title}
      </Typography>
      <Divider
        variant="middle"
        sx={{
          borderColor: "primary.main", // لون الخط
          borderWidth: "2px", // سمك الخط
          mb: 2, // مسافة تحت الخط
          width: "140px",
          marginLeft:"50px"
        }}
      />
    </div>
  );
}

export default Titlepages;
