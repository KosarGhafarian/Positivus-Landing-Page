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

import MediaQuery from "../hooks/MediaQuery";
import contactUs from "../assets/images/contactUs.svg";
import SubHeader from "../components/SubHeader";

const ContactUs = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const handleContactForm = (inputData) => {};

  return (
    <Box id="contactus">
      <SubHeader
        name="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        sx={{ width: "358px !important" }}
      />
      <Box className="contact-us-form">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 12, md: 10, lg: 7 }}>
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
          <Grid2
            size={{ xs: 12, sm: 12, md: 10, lg: 7 }}
            className="contact-item"
          >
            <Controller
              control={control}
              rules={{ required: true }}
              name="name"
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoComplete="off"
                  error={!!errors[field.name]}
                  name="name"
                  label="Name"
                  type="text"
                  helperText={!!errors[field.name] ? "Name is Required" : ""}
                  value={field.value}
                  onChange={({ target }) => {
                    field.onChange(target.value);
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 12, md: 10, lg: 7 }}
            className="contact-item"
          >
            <Controller
              control={control}
              rules={{
                required: true,
                validate: (value) => {
                  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
              }}
              name="email"
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoComplete="off"
                  error={!!errors[field.name]}
                  name="email"
                  label="Email"
                  type="email"
                  helperText={
                    !!errors[field.name]
                      ? watch(field.name)
                        ? "Enter a valid email, please"
                        : "Email is Required"
                      : ""
                  }
                  value={field.value}
                  onChange={({ target }) => {
                    field.onChange(target.value);
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 12, md: 10, lg: 7 }}
            className="contact-item"
          >
            <Controller
              control={control}
              name="message"
              defaultValue={""}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoComplete="off"
                  error={!!errors[field.name]}
                  name="message"
                  label="Message"
                  multiline
                  rows={6}
                  helperText={!!errors[field.name] ? "Message is Required" : ""}
                  type="text"
                  value={field.value}
                  onChange={({ target }) => {
                    field.onChange(target.value);
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 12, md: 10, lg: 7 }}
            className="contact-item"
          >
            <Button
              size="medium"
              content="contained"
              onClick={handleSubmit(handleContactForm)}
            >
              Send Message
            </Button>
          </Grid2>
        </Grid2>
        {MediaQuery() && <img src={contactUs} />}
      </Box>
    </Box>
  );
};

export default ContactUs;
