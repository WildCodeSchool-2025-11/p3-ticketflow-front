import {
	GitHub as GitHubIcon,
	Google as GoogleIcon,
	Visibility,
	VisibilityOff,
} from "@mui/icons-material";

import {
	Box,
	Button,
	Divider,
	IconButton,
	InputAdornment,
	LinearProgress,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";

import { useState } from "react";

interface FormErrors {
	firstname?: string;
	lastname?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
}

export default function login() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	return <div>login</div>;
}
