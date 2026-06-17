import useSurvey from "../hook/useSurveys"

export default function ListSurvey(){
	const [data] = useSurvey()
	
	return(
		<div className="flex justify-center flex-col items-center h-screen">
			<h2 className="mb-7 text-3xl font-semibold">Table Survey</h2>
			<table>
				<thead>
					<tr className="text-left h-15 bg-amber-50">
						<th className="pl-4">No</th>
						<th>Nama</th>
						<th>Umur</th>
						<th>Kelamin</th>
						<th>Seorang Perokok?</th>
						<th>Rokok yang pernah dicoba dicoba</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((item, index) => (
						<tr key={index} className="bg-white min-h-40 py-3">
							<td className="w-30 pl-4">
								{index+1}
							</td>
							<td className="w-40">{item.name}</td>
							<td className="w-40">{item.age}</td>
							<td className="w-43">{item.gender}</td>
							<td className="w-50">{item.smoker}</td>
							<td className="w-100">
								{item.smoker === 'ya' && item?.cigarete?.map((val, idx) =>(
									<ol key={idx}>
										<li>{val}</li>
									</ol>
								))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}