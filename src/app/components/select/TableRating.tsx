import { Rating } from "@mui/material";

const TableRating = ({ label, name, register, error }: any) => {
    return (
        <div>
            <h3 className="text-[14px] font-[500] mb-1 text-black">{label}</h3>
            <Rating
                name={name}
                {...register(name)}
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
};

export default TableRating;
