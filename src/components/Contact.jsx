import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.target

    try {
      const response = await fetch('https://formspree.io/f/xqewbzly', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] px-16 py-24">
      <div className="max-w-2xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contacte moi</h2>
          <p className="text-white/50 text-lg">
            Un projet en tête ? Discutons-en.
          </p>
        </div>

        {/* Message succès */}
        {status === 'success' && (
          <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-6 py-4 text-center mb-6">
            ✅ Message envoyé avec succès ! Je te réponds très vite.
          </div>
        )}

        {/* Message erreur */}
        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-6 py-4 text-center mb-6">
            ❌ Une erreur est survenue. Réessaie ou contacte moi directement par mail.
          </div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Nom et Prénom */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="nom" className="text-white/70">Nom</Label>
              <Input
                id="nom"
                name="nom"
                placeholder="Ton nom"
                required
                className="bg-[#111111] border-white/10 text-white placeholder:text-white/20 focus:border-yellow-400"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Label htmlFor="prenom" className="text-white/70">Prénom</Label>
              <Input
                id="prenom"
                name="prenom"
                placeholder="Ton prénom"
                required
                className="bg-[#111111] border-white/10 text-white placeholder:text-white/20 focus:border-yellow-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-white/70">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ton@email.com"
              required
              className="bg-[#111111] border-white/10 text-white placeholder:text-white/20 focus:border-yellow-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-white/70">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décris ton projet ou ta demande..."
              rows={6}
              required
              className="bg-[#111111] border-white/10 text-white placeholder:text-white/20 focus:border-yellow-400 resize-none"
            />
          </div>

          {/* Bouton submit */}
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-yellow-400 hover:bg-yellow-50 text-black font-semibold py-6 text-base disabled:opacity-50"
          >
            {status === 'loading' ? '⏳ Envoi en cours...' : '🚀 Envoyer le message'}
          </Button>

        </form>
      </div>
    </section>
  )
}

export default Contact