import React from "react";
import { useAuthContext } from "../../context/authContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./style.scss";
import Error from "../../component/Error";

// axios
import { Localhost } from "../../config/api";

//component
import Title from "../../component/Title";
import Button from "../../component/Button";
import OR from "../../component/OR";
import Input from "../../component/input";
import Not from "../../component/not a member";

const Login = () => {
  const { loading, setLoading, setToken, login } = useAuthContext();
  //   const [errors, setError] = useState();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),
    password: Yup.string().required("Please Enter your password"),
  });

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    const res = await axios
      .post(`${Localhost}/login`, { email, password })
      .catch((err) => {
        // setError(err.response.data.message);
        // console.log(err.response.data.message);
        console.log(err);
      })
      .finally(() => setLoading(false));

    if (res) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      login();
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <Title title={"Sign In to Heritage"} />
        <div>
          <Button
            color={"#fff"}
            backgroundColor={"#4167B2"}
            title={"Continue with Facebook"}
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg=="
            }
          />
          <Button
            title={"Continue with Google"}
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVR4nO2ZbUwbZQDHL45M5vygycRkL0YFlWw9oHdFYSsr69uItBksIYwOwiC8KKwq4EAY8TYYsoG8CIOFCduCzmiTQbveNSC4q7p9chlkEo0fTIxrC2uPFzcXoC885sggdYP2bj1ajP0n/y9N7+nvd9fnuadXCAommGB8DsBEIdMVaB5VjBDWTPTOuFIwNy4TuCx7Y4FFGAss+wQLEwp09q4KNdsK+QNUKT8XYFAIFOj8VQ7HUQXIDUsS6jTHxwI2tcgFTlsecmO6KjrG/+DVgjeoPPS2JUHACnpFEWEssB1BRmeOo+F+gZ/6EGk2SwQLvoI/JiIWuGY+QE6vGThoittky0F+4Rrc/EhtOcgIwNI2cgo/0wk/b1UhE2sNb37YaTW/lTN4cFEUak1Hrf6CpwoQEuIyVD7ys9/g8zmGny5B2lhNRDnqpPKRm1Ml/OqpkzGiexi65X5ZVJjtGCyhSmMwKhcZpZfPVc68kVP4mVo03CITuJiCT5UgXUwmnxlDn7Ed5V9yF6G4hqczqUZ+YgJvPYyY7tfxXmQ7Pr3uWzOQ8TWBB9/v2jE/DM9PlfGBebfHJe8W0EAboPUWBwmfdhhhQPfvc9FgXPL4HdeaiZrWJTzQpG2wG3mmJQG6c7ooYFWhbt95gZMqid4GrcfYjbx4d/jlXoPBvbqYxb3LpBrphtZr7Ea4akWBh31wIXoCqJOehtZr7CR8xZOAwwi3sRnvhXwj4KrJVT1/eP1Ah5E35lGAjEoKlMBbpd/Mev1AOwlPehKYJXdGBErgtWLCxURg3pMAIHc+GyiBbYXD4H8hMOlJYO6HqNcDJRBRRCz8xyexhtEk7vOyjLYHSuDt4z0mBgK8ytXg717jg1pc9qBJk7YJ4jiNvWWbee/pnJ4E3q1v0DMQgONWgh8ZfhNk6RRA0Z8CWgziC1wLqM/Ud3u7AjXtFSqvAwEAPWU38u4sgduNMOgfEIIU7YFFeLqHdQpnx0DCDq7g61sqXo4s1rs8wUcexZ0YiTF7mucwwvU0/AwZDWpw+TK4eyuuyi0kKfL58SBGYiHJlT0Wb2c/p7b1OuNBAQlv/21YYM/TJa8Iv9QTuGzUFwmMxELSsY4xb/BbC78DNZ99hLIavA6XjnqCX74Serml+9vdW9nCdw3teSm/sfZ3JqtP2sedY2zHh3SDCa9kahUuJhKZOoWzjUjswS5mh3obt3dQtrkFl3yu0ipcqX2p4OCpVo/w4UWGBexTjNXNczkdhLhZyUDAXaROLx05axBjXxEJ4iuD8WGXSdGWHsMeYbshseYELr9Jv8f9GGVfKshqxkBYAbmiQMGpxk7Il9QTkhGmAr40u+t9sP2doX/Bp1Sf/xXyNRpN2sZjuv3jfpHozQWRav0i/L7yL6gi7CyrjeOqIUnRc5V6ucUfEoe+VoGMmlYT1omFcQLvJhF6EpfdZjMnnqS1hHTEYFjD39xdhr0Nh7RKRqsTm2Zola5zRGID5I/06kQRdbj01kG37cWTNrX/wOJZvzwkfBXydy4NCtEzuPTHHG2yg/WE1Skcn+DS61/iMv//yfdoNADacB4XH2nCxfpKXPZngTZ5NkurcNFXiN4EpmuVC/Rr5Vf3mxoICdFlSMymj4GCCSYYyNf8A50RcaYC8geEAAAAAElFTkSuQmCC"
            }
          />
          <Button
            title={"Continue with Apple"}
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO3ZT4hNURzA8c8YjI1QkgzZkIX8S0ZS/pQ/+VNSipLIwkJZWhEWwkIhCzYWlGQhLCTKylr5v7CQxEwTwjCaGeXq1pl6vd575r1333vnar71W713zznfe86555zfYZS6WYLLeIZDcshs3EdSEIfljG3oK5JIY68csR1DJSTSmCcnzMGPMhKv0CYnPCojkcYBOaGrgsRTjJMTLpWR+I5FcsSLEhLpfFkpZwwVSTwOkz8a2sLithQLManM/9K3341b2IwxRb9PxeJQzly0axIrcBWfSwyZdBidDI0apngypyJrcAHvSpTRhyuhnobQibsVvkDF8RbnsBvrsAvn8aGKMu6FejMjfYNfqmhAlvEVW7OQ2IDBFkkkIdL6t9QjMR8/WyyRFCyeE2qRGIvnEQgk4dzSUWtv7I9AIMFZddAevjqtlnhYYt2piuURSAxlsQM4FoHITRlQfKZuRezIQuRlBCKdWYh8a7HE73on+TCDEYj4H3okwZQsRHoiEFmVhciTCEROZyFyPQKR3lo3iYUciUAkySInvD4CiQT99aaMOiqkOJsd7+vNDd+OQCIJ8SkkwWtiTwQCSYltfZp6qnp49UbQ+KQg/mBBLb1yKoLGJwVxR43MwkBEvdGlDs5EIJHgmjqZGHK3rZTowwwZsK/FIgdlSDV53yzjQdZ3jNNasL3vwXQNYFkTty79IS3VMDY24Sg8GC6FGs7qfwyz9BLoIjaFJFt6bJ0Z7g2P4k2FZ7uzOh2OlPSq7XhIHQ2Exqf5sJ0YP4Ln1+IGPuIXXuMEJjeh7aOMYoT8BfcegYzf+KxLAAAAAElFTkSuQmCC"
            }
          />
        </div>
        <OR />
        <div>
          <Input
            placeholder={"Enter your Email"}
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className={formik.touched.email && formik.errors.email && "error"}
          />
          {formik.touched.email && formik.errors.email && (
            <Error msg={formik.errors.email} />
          )}

          <Input
            name="password"
            type="password"
            placeholder={"Enter your password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            className={
              formik.touched.password && formik.errors.password && "error"
            }
          />
          {formik.touched.password && formik.errors.password && (
            <Error msg={formik.errors.password} />
          )}
        </div>
        <button type="submit" className="submit">
          {loading ? "Loading..." : "Login"}
        </button>
        <hr />
        <Not title={"Not a member"} ques={"Sign up"} href={"/register"} />
      </form>
    </div>
  );
};

export default Login;
