// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database operations for announcements
export const announcementService = {
  // Get all active announcements
  async getAnnouncements() {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching announcements:', error)
      return { data: null, error: error.message }
    }
  },

  // Get all announcements (for admin)
  async getAllAnnouncements() {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching all announcements:', error)
      return { data: null, error: error.message }
    }
  },

  // Create new announcement
  async createAnnouncement(announcement) {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .insert([{
          title: announcement.title,
          content: announcement.content,
          details: announcement.details || [],
          extra_info: announcement.extraInfo || null,
          active: true
        }])
        .select()

      if (error) throw error
      return { data: data[0], error: null }
    } catch (error) {
      console.error('Error creating announcement:', error)
      return { data: null, error: error.message }
    }
  },

  // Update announcement
  async updateAnnouncement(id, announcement) {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .update({
          title: announcement.title,
          content: announcement.content,
          details: announcement.details || [],
          extra_info: announcement.extraInfo || null
        })
        .eq('id', id)
        .select()

      if (error) throw error
      return { data: data[0], error: null }
    } catch (error) {
      console.error('Error updating announcement:', error)
      return { data: null, error: error.message }
    }
  },

  // Delete announcement
  async deleteAnnouncement(id) {
    try {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id)

      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error deleting announcement:', error)
      return { error: error.message }
    }
  },

  // Toggle announcement active status
  async toggleAnnouncementStatus(id, active) {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .update({ active })
        .eq('id', id)
        .select()

      if (error) throw error
      return { data: data[0], error: null }
    } catch (error) {
      console.error('Error toggling announcement status:', error)
      return { data: null, error: error.message }
    }
  },

  // Subscribe to announcements changes (real-time)
  subscribeToAnnouncements(callback) {
    const subscription = supabase
      .channel('announcements-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'announcements'
        },
        (payload) => {
          console.log('Announcement change detected:', payload)
          callback(payload)
        }
      )
      .subscribe()

    return subscription
  },

  // Unsubscribe from changes
  unsubscribe(subscription) {
    supabase.removeChannel(subscription)
  }
}