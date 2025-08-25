import './ClubThumbnail.css';
import { Club } from '../services/ClubService';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

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
                <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold text-gray-900">{selectedClub.name}</h1>
                                <button onClick={closeClub} className="text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100">
                                    <XMarkIcon className="size-6"></XMarkIcon>
                                </button>
                            </div>
                            <p className="text-gray-700 mb-4 text-wrap">{selectedClub.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ClubThumbnail;

