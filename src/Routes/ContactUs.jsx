import { useForm, Controller } from "react-hook-form";

import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid2,
  TextField,
  Button,
} from "@mui/material";

import contactUs from "../assets/images/contactUs.svg";
import SubHeader from "../components/SubHeader";

const ContactUs = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <Box id="contactus">
      <SubHeader
        name="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        sx={{ width: "358px !important" }}
      />
      <Box className="contact-us-form">
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 7 }}>
            <Controller
              control={control}
              name="option"
              defaultValue={"1"}
              render={({ field }) => (
                <FormControl>
                  <RadioGroup
                    {...field}
                    row
                    name="option"
                    onChange={(e, value) => {
                      field.onChange(value);
                    }}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Say Hi"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Get a Quote"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 7 }} className="contact-item">
            <Controller
              control={control}
              name="name"
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  name="name"
                  label="Name"
                  type="text"
                  value={field.value}
                  onChange={({ target }) => {
                    field.onChange(target.value);
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 7 }} className="contact-item">
            <Controller
              control={control}
              name="email"
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  name="email"
                  label="Email"
                  type="email"
                  value={field.value}
                  onChange={({ target }) => {
                    field.onChange(target.value);
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 7 }} className="contact-item">
            <Controller
              control={control}
              name="message"
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  name="message"
                  label="Message"
                  multiline
                  rows={6}
                  type="text"
                  value={field.value}
                  onChange={({ target }) => {
                    field.onChange(target.value);
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 7 }} className="contact-item">
            <Button size="medium" content="contained">
              Send Message
            </Button>
          </Grid2>
        </Grid2>
        <img src={contactUs} />
      </Box>
    </Box>
  );
};

export default ContactUs;
