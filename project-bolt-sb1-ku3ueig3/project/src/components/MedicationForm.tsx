import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { MedicationFormData } from '../types';

interface MedicationFormProps {
  onSubmit: (data: MedicationFormData) => void;
}

export function MedicationForm({ onSubmit }: MedicationFormProps) {
  const [formData, setFormData] = useState<MedicationFormData>({
    name: '',
    dosage: '',
    frequency: 'daily',
    time: '09:00',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      dosage: '',
      frequency: 'daily',
      time: '09:00',
      notes: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Medication Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="dosage" className="block text-sm font-medium text-gray-700">
          Dosage
        </label>
        <input
          type="text"
          id="dosage"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.dosage}
          onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
          Frequency
        </label>
        <select
          id="frequency"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.frequency}
          onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="twice-daily">Twice Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
          Time
        </label>
        <input
          type="time"
          id="time"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="notes"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Plus className="h-5 w-5 mr-2" />
        Add Medication
      </button>
    </form>
  );
}