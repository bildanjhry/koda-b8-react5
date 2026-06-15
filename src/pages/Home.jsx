import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect } from "react"

const schemaValidation = yup.object({
	name: yup.string().required("Silahkan masukan nama anda.").min(3, "Nama anda terlalu pendek."),
	age: yup.number().required("Silahkan masukan umur anda").positive().integer().min(18, "Anda harus diatas 18 tahun untuk ikut survey."),
	gender: yup.string().required("Silahkan pilih kelamin anda"),
	smoker: yup.string().required("Silahkan konfirmasi apakah anda seorang perokok"),
})

export default function Home(){

	const { register, handleSubmit, getValues, watch, setError, clearErrors, formState:{ errors} } = useForm({
		resolver: yupResolver(schemaValidation),
	})

	const [cigarete, smoker] = watch(["cigarete", "smoker"])

	useEffect(() => {
		if(smoker === "ya" && !cigarete) setError("cigarete", {type:"manual", message:"Silahkan pilih rokok."})
		else clearErrors("cigarete")

	},[getValues, watch, smoker, clearErrors, cigarete, setError])

	function onSubmitSurvey(e){
		if(getValues("smoker") === "ya" && !getValues("cigarete").length){
			setError("cigarete", {type:"manual", message:"Silahkan pilih rokok."})
		}
		console.log(e)
	}
	
  return(
    <div className=" w-200 justify-self-center flex flex-col">
      <header className=" relative w-full flex-col mb-8 justify-center
        rounded-lg flex pt-2">
            <div className="bg-[#663ab6] rounded-t-lg w-full h-3 z-0"></div>
            <span className="w-full h-46 pl-8 pt-6 bg-white rounded-b-lg">
                <h1 id="title" className="text-3xl mb-6 font-medium">Survey Perokok</h1>
                <p className="mb-4">Form survey perokok di Koda Tech Academy</p>
                <p className="text-red-500 ">* Required</p>
            </span>
      </header>
        <div id="form-wrapper" className=" w-full">
            <form 
						onSubmit={handleSubmit(onSubmitSurvey)}
						action="" id="form-survey-perokok" className="flex flex-col gap-6">
                <div className="pl-8  w-full justify-start pt-8 bg-white rounded-lg flex flex-col h-46 ">
                    <label className="mb-10	 text-xl" htmlFor="name">Siapa nama anda? </label>
                    <div>
                        <input 
                        className="border-b text-sm pb-3 focus:outline-none"
                        placeholder="Masukan Nama Anda"
                        type="text" name="name" id="name"
												{...register("name")}
												/>
                    </div>
												{errors?.name && <p className="text-red-500 relative top-2 text-sm">*{errors?.name?.message}</p> }
                </div>
                <div className="pl-8  w-full justify-start pt-8 bg-white rounded-lg flex flex-col h-46 ">
                    <label className="mb-10	 text-xl" htmlFor="age">Berapa umur anda? </label>
                    <div>
                       <input 
                       className="border-b text-sm pb-3 focus:outline-none"
                       placeholder="Berapa Umur Anda"
                       type="number" name="age" id="age"
											 {...register("age")}/>
                    </div>
										{errors?.age && <p className="text-red-500 relative top-2 text-sm">*{errors?.age?.message}</p> }
                </div>
                <div className="pl-8  w-full justify-start pt-8 bg-white rounded-lg flex flex-col h-50 ">
                    <label className="text-xl mb-8">Apa jenis kelamin anda?</label>
                    <div className="text-md">
                        <section className="mb-2">
                            <input 
														type="radio" name="gender" id="male" value="male"
														{...register("gender")}/>
                            <label className="ml-1" htmlFor="male">Laki-laki</label>
                        </section>
                        <section>
                            <input type="radio" name="gender" id="female" value="female"
														{...register("gender")}/>
                            <label className="ml-1" htmlFor="female">Perempuan</label>
                        </section>
                    </div>
										{errors?.gender && <p className="text-red-500 relative top-2 text-sm">*{errors?.gender?.message}</p> }
                </div>
                 <div className="pl-8  w-full justify-start pt-8 bg-white rounded-lg flex flex-col h-50 ">
                    <label className="text-xl mb-8">Apakah anda perokok?</label>
                    <div className="text-md">
                        <section className="mb-2">
                            <input type="radio" name="smoker" id="ya" value="ya"
														{...register("smoker")}
														/>
                            <label className="ml-1" htmlFor="ya">Ya</label>
                        </section>
                        <section>
                            <input type="radio" name="smoker" id="tidak" value="tidak"
														{...register("smoker")}/>
                            <label className="ml-1" htmlFor="tidak">Tidak</label>
                        </section>
                    </div>
                </div>
                <div className="pl-8  w-full justify-start pt-8 bg-white rounded-lg flex flex-col h-66 ">
                    <label className="text-xl mb-8">Jika anda perokok, rokok apa yang anda pernah coba?</label>
                    <div className="text-md">
                        <div className="mb-1">
                            <input type="checkbox" name="gudang-garam-filter" id="gudang-garam-filter"
														{...register("cigarete")}
														/>
                            <label className="ml-1" htmlFor="gudang-garam-filter">Gudang Garam Filter</label>
                        </div>
                        <div className="mb-1">
                            <input type="checkbox" name="lucky-strike" id="lucky-strike"
														{...register("cigarete")}/>
                            <label className="ml-1" htmlFor="lucky-strike">Lucky Strike</label>
                        </div>
                        <div className="mb-1">
                            <input type="checkbox" name="marlboro" id="marlboro"
														{...register("cigarete")}/>
                            <label className="ml-1" htmlFor="marlboro">Marlboro</label>
                        </div>
                        <div className="mb-1">
                            <input type="checkbox" name="esse" id="esse"
														{...register("cigarete")}/>
                            <label className="ml-1" htmlFor="esse">Esse</label>
                        </div>
                    </div>
										{errors?.cigarete && <p className="text-red-500 relative top-2 text-sm">*{errors?.cigarete?.message}</p> }
                </div>
                <div className="h-22 mb-4 flex flex-rows justify-between items-center">
                    <button className="h-12 w-27 text-white rounded-lg cursor-pointer bg-[#653ab6b3]" type="submit">Simpan</button>
                    <button className="cursor-pointer text-[#653ab6b3]" type="reset">Reset</button>
                </div>
            </form>
        </div>
    </div>
  )
}