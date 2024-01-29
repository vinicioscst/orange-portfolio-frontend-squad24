import { Box, Chip, MenuItem, FormControl, InputLabel, Select, SelectChangeEvent, OutlinedInput } from "@mui/material";
import { ForwardedRef, forwardRef, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = ["UX/UI", "Web", "Mobile", "API", "Game"];

function ChipInput({ ...rest }, ref: ForwardedRef<HTMLInputElement>) {
  const [tagsName, setTagsName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof tagsName>) => {
    const {
      target: { value },
    } = event;
    if (value.length <= 3) {
        setTagsName(typeof value === "string" ? value.split(",") : value);
    }
  };

  return (
    <FormControl>
      <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
      <Select
        sx={{ width: '100%'}}
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        ref={ref}
        {...rest}
        multiple
        value={tagsName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Tags" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5}}>
            {selected.map((value: string) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {tags.map((tag) => (
          <MenuItem key={tag} value={tag}>
            {tag}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const ForwardedChipInput = forwardRef(ChipInput);
export default ForwardedChipInput;
