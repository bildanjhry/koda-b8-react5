import { useState, useEffect } from "react"

export default function useSurvey(){
	const [data, setData] = useState([])
	useEffect(() => {
		function getSurveys(){
			const surveys = JSON.parse(window.localStorage.getItem("surveys"))
			setData(surveys)
		}
		getSurveys()
	},[setData])

	return [data, (data) => {
		setData((prev) => {
			return [
			...prev,
			data
		]})
	}]
}