'use client';
import { Incident , Prisma } from '@prisma/client';
import { useEffect, useState } from 'react';

type Props = {
  onThumbnailClick: (incd: IncidentWithCamera) => void;
};


type IncidentWithCamera = Prisma.IncidentGetPayload<{ include: { camera: true } }>;


export default function ListBox({ onThumbnailClick }: Props) {
  const [incidents, setIncidents] = useState<IncidentWithCamera[]>([]);
  const [totalIncidents , setTotalIncidents] = useState<Number>()

  // to mount component with incident array data initially

  useEffect(() => {
    fetch('/api/incidents?resolved=false')
      .then((res) => res.json())
      .then(data => setIncidents(data));
  } , [])

  const resolveIncident = async (id: number) => {
    const element = document.getElementById(`incident-${id}`);
    if (element) {
      element.classList.add("fade-out");
    }

    setTimeout(() => {
      setIncidents(prev => prev.filter((i) => i.id !== id));
    }, 500);

    await fetch(`/api/incidents/${id}/resolve`, { method: 'PATCH' });
  };


  

  const formatIncidentTime = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const timeStart = startDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const timeEnd = endDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    const date = startDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

    return `${timeStart} - ${timeEnd} on ${date}`;
  };

  const changeIcon = (type: string) => {
    if (type === "Unauthorized Access") return '/door.png';
    else if (type === "Gun Threat") return '/gun.png';
    else if(type === "Face Recognized") return '/face.png';
  };



  return (
    <>
      
        {/* incidents list */}
        <div className="max-w-[45rem] h-[30rem] flex flex-col gap-4 m-auto overflow-y-auto scroll-container p-5 items-start bg-stone-900 rounded-xl">

          <div className="h-auto w-full max-w-[40rem] flex justify-between items-center mb-5">
            {/* Left (Unresolved) */}
            <div className="flex items-center gap-2 text-white text-2xl">
              <img
                src="./warn.png"
                className="w-[2rem] h-[2rem] ml-4.5 hover:rotate-y-360 duration-1000 ease-in"
              />
              {incidents.length}&nbsp;Unresolved Incidents
            </div>

            {/* Right (Resolved) */}
            <div className="flex items-center gap-2 text-white text-md">
              <img
                src="./success.png"
                className="w-[2rem] h-[2rem] ml-4.5 hover:rotate-y-360 duration-1000 ease-in"
              />
              1&nbsp;Resolved Incidents
            </div>
          </div>

          {incidents?.length !== 0 ? (
            incidents.map((incd) => {
              return (
                <>
                  <div className="p-3.5 h-[170px] w-full flex justify-between items-center gap-25" id={`incident-${incd.id}`}>
                    <div className="flex">
                      <img
                        src={incd.thumbnailUrl}
                        onClick={() => onThumbnailClick(incd)}
                        className="h-28 w-44 object-cover mr-5 rounded-lg cursor-pointer mt-3"
                      />
                      <div >
                        <img src={changeIcon(incd.type)} alt="icon" className="inline mr-3.5" />
                        <p className="leading-[2.5] inline text-stone-50 font-mono">
                          <b>{incd.type}</b>
                        </p>
                        <p className="text-stone-50 mt-10">{incd.camera.location}</p>
                        <p className="text-stone-50">
                          {formatIncidentTime(incd.tsStart.toString(), incd.tsEnd.toString())}
                        </p>
                      </div>
                    </div>
                    <button 
                      className="flex items-center gap-2 bg-stone-800 text-stone-50 px-4 py-2 rounded hover:bg-stone-700" 
                      onClick={() => resolveIncident(incd.id)}
                    >
                      Resolve <img src="/arrow.png" className="w-4 h-4" />
                    </button>
                  </div>
                </>
              );
            })
          ) : null}
        </div>
    </>
  );
}
