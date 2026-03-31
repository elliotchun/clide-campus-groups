import './ClubThumbnail.css';
import { Club } from '../services/ClubService';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ModalDialog from './ModelDialog';

const ClubThumbnail: React.FC<{ club: Club }> = ({ club }) => {
    const [selectedClub, setSelectedClub] = useState<Club | null>(null);

    const openClub = () => {
        setSelectedClub(club);
    };

    const closeClub = () => {
        setSelectedClub(null);
    };

    return (
        <div className="snap-start w-36">
            <div className="flex flex-col items-center justify-center cursor-pointer" onClick={openClub}>
                <img className="rounded-xl size-36 shadow-md" src={club.image} alt={club.name} />
                <p className="text-black text-wrap text-center mt-2 text-sm font-semibold">{club.name}</p>
            </div>
            {selectedClub && (
                <ModalDialog>
                    <div className="flex justify-between items-start mb-4 gap-4">
                        <h1 className="text-2xl font-bold text-gray-900 flex-1 min-w-0 text-wrap">
                            {selectedClub.name}
                        </h1>
                        <button onClick={closeClub} className="shrink-0 text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100 p-1">
                            <XMarkIcon className="size-6"></XMarkIcon>
                        </button>
                    </div>
                    <p className="text-gray-700 mb-4 text-wrap">{selectedClub.description}</p>
                </ModalDialog>
            )}
        </div>
    );
}

export default ClubThumbnail;