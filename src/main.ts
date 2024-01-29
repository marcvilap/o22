/* REVEAL EFFECT
 ********************************************************************************/
const elements = document.querySelectorAll('[data-reveal-group]')
const observer = new IntersectionObserver(entries => {
	entries.forEach(({ isIntersecting, target }) => {
		if (target instanceof HTMLElement) {
			target.dataset.revealGroup = isIntersecting ? 'active' : ''
		}
	})
})
elements.forEach(element => observer.observe(element))

/* VIDEO EFFECT
 ********************************************************************************/
const controlVideo = () => {
	const video = document.querySelector<HTMLVideoElement>('video#video')
	const triggers = document.querySelectorAll('[data-video-trigger]')
	if (!video) return
	triggers.forEach(element =>
		new IntersectionObserver(entries =>
			entries.forEach(({ isIntersecting }) => {
				if (isIntersecting) {
					video.play()
					setTimeout(() => video.pause(), 3000)
				}
			}),
		).observe(element),
	)
}
controlVideo()
