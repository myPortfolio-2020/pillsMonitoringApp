import React from 'react';
import { Clock, Pill, Trash2 } from 'lucide-react';
import type { Medication } from '../types';

interface MedicationListProps {
  medications: Medication[];
  onDelete: (id: string) => void;
}

export function MedicationList({ medications, onDelete }: MedicationListProps) {
  return (
    <div className="space-y-4">
      {medications.map((med) => (
        <div
          key={med.id}
          className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Pill className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{med.name}</h3>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Dosage: {med.dosage}</p>
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {med.time} - {med.frequency}
                </p>
                {med.notes && <p className="italic">{med.notes}</p>}
              </div>
            </div>
          </div>
          <button
            onClick={() => onDelete(med.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
}