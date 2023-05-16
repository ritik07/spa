import React from 'react'
import Home from '../../component/home'
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constant'

const Dashboard = () => {
	useEffect(() => {
		getCompleteUserSession()
	}, [])


	const getCompleteUserSession = async () => {
		let user_id = JSON.parse(localStorage.getItem("user_id"))
		let response = await axios.get(BASE_URL + `user/usersession/getcompletesession/${user_id}`,)
		localStorage.setItem("user_session", JSON.stringify(response.data.data.session_data.session_id))
		console.log("response", response);
	}

	return (
		<div>
			<Home />
		</div>
	)
}

export default Dashboard