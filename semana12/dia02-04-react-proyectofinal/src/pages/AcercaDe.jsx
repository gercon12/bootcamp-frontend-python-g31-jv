import germanFoto from '../assets/german.jpg'

const AcercaDe = () => {

    return (
        <main className="max-w-6xl mx-auto p-4 sm:p-6">

            {/* Encabezado */}
            <div className="mb-6 sm:mb-8">

                <h2 className="text-2xl sm:text-3xl font-bold">
                    Acerca de
                </h2>

                <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Información del desarrollador del proyecto.
                </p>

            </div>


            {/* Información del desarrollador */}
            <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">

                    {/* Fotografía */}
                    <div className="shrink-0">

                        <img
                            src={germanFoto}
                            alt="German Contreras Jacinto"
                            className="w-44 sm:w-52 md:w-60 h-auto object-cover border-2 border-blue-600 rounded-lg"
                        />

                    </div>


                    {/* Información */}
                    <div className="w-full min-w-0 text-center md:text-left">

                        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
                            Desarrollador
                        </p>

                        <h3 className="text-2xl sm:text-3xl font-bold mt-1">
                            German Contreras Jacinto
                        </h3>

                        <p className="text-lg sm:text-xl text-gray-600 mt-2">
                            Desarrollador Full Stack
                        </p>


                        {/* Datos */}
                        <div className="mt-5 sm:mt-6 border-t border-gray-200 pt-5">

                            <p className="text-sm sm:text-base text-gray-700">
                                <span className="font-semibold">
                                    Empresa:
                                </span>{' '}
                                VOSMEDIA S.A.
                            </p>

                            <p className="text-sm sm:text-base text-gray-700 mt-2">
                                <span className="font-semibold">
                                    Ubicación:
                                </span>{' '}
                                Guatemala, Centro America
                            </p>

                            {/* Repositorio del proyecto */}
                            <p className="text-sm sm:text-base text-gray-700 mt-2 break-words">

                                <span className="font-semibold">
                                    GitHub:
                                </span>{' '}

                                <a
                                    href="https://github.com/gercon12/bootcamp-frontend-python-g31-jv/tree/main/semana12/dia02-04-react-proyectofinal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                    Repositorio del proyecto
                                </a>

                            </p>

                            <p className="text-sm sm:text-base text-gray-700 mt-2">
                                <span className="font-semibold">
                                    Academia:
                                </span>{' '}
                                TECSUP - Lima Perú
                            </p>

                            <p className="text-sm sm:text-base text-gray-700 mt-2">
                                <span className="font-semibold">
                                    Catedrático:
                                </span>{' '}
                                Ing. Victor Villazón
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default AcercaDe