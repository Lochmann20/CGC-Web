'use client'

// src/utils/testSupabase.js

import supabase from '../supabaseClient'; // Adjust the path if needed

const testUrlFetch = async () => {
  const { data, error } = await supabase
    .storage
    .from('CGC-Wargaming')
    .list();

  if (error) {
    console.error('Error listing images:', error);
    return;
  }

  data.forEach(async (item) => {
    const { publicURL, error } = supabase
      .storage
      .from('CGC-Wargaming')
      .getPublicUrl(item.name);

    if (error) {
      console.error(`Error fetching URL for ${item.name}:`, error);
    } else {
      console.log(`Fetched URL for ${item.name}: ${publicURL}`);
    }
  });
};

testUrlFetch();
