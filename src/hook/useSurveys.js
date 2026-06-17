import { useState } from "react"

export default function useSurvey(){
	const [data, setData] = useState(JSON.parse(window?.localStorage?.getItem("surveys")))

	return [data, (data) => {
		setData((prev) => {
			return [
			...prev,
			data
		]})
	}]
}