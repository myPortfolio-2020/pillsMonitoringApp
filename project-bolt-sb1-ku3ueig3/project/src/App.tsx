import React, { useEffect, useState } from 'react';
import { Bell, Pill } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { MedicationForm } from './components/MedicationForm';
import { MedicationList } from './components/MedicationList';
import type { Medication, MedicationFormData } from './types';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [medications, setMedications] = useState<Medication[]>([]);

  useEffect(() => {
    fetchMedications();
  }, []);

  const fetchMedications = async () => {
    const { data, error } = await supabase
      .from('medications')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      toast.error('Failed to fetch medications');
      return;
    }

    setMedications(data || []);
  };

  const handleAddMedication = async (formData: MedicationFormData) => {
    const { data, error } = await supabase
      .from('medications')
      .insert([{ ...formData }])
      .select()
      .single();

    if (error) {
      toast.error('Failed to add medication');
      return;
    }

    setMedications([...medications, data]);
    toast.success('Medication added successfully');
  };

  const handleDeleteMedication = async (id: string) => {
    const { error } = await supabase
      .from('medications')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Failed to delete medication');
      return;
    }

    setMedications(medications.filter((med) => med.id !== id));
    toast.success('Medication deleted successfully');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <Pill className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Medication Reminder</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Add New Medication</h2>
            </div>
            <MedicationForm onSubmit={handleAddMedication} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Medications</h2>
            <MedicationList
              medications={medications}
              onDelete={handleDeleteMedication}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;