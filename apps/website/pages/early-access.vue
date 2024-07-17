<script lang="ts" setup>
function openAlphaModal() {
}
function openBetaModal() {
}
</script>

<template>
	<div>
		<div class="mx-auto max-w-6xl">
			<header class="text-center mb-12">
				<h1 class="font-bold text-primary text-4xl">
					Join Our Early Access Program
				</h1>
				<p class="text-lg mt-4">
					Be the first to experience the latest features and help shape the future of our software.
				</p>
			</header>

			<!-- Early Access Details Section -->
			<section class="grid mb-6 grid-cols-1 md:grid-cols-2 gap-8">
				<div class="p-6 shadow-lg rounded-lg flex flex-col justify-between bg-secondary">
					<div>
						<h2 class="font-bold text-3xl text-orange-500 mb-3">
							Alpha Access
						</h2>
						<p class="mb-6">
							Gain first access to new developments and actively participate in shaping the product's direction.
						</p>
					</div>
					<button class="bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600 text-white px-4 b-solid b-none transition-colors font-bold text-nowrap w-min py-3 rounded" @click="openAlphaModal">
						Get Alpha Access
					</button>
				</div>

				<div class="bg-secondary p-6 shadow-lg rounded-lg flex flex-col justify-between">
					<div>
						<h2 class="text-3xl font-bold mb-3 text-green-500">
							Beta Testing
						</h2>
						<p class="mb-6">
							Engage in our beta testing to enhance quality and ensure a stable release.
						</p>
					</div>
					<div class="flex items-center gap-2">
						<button class="cursor-pointer rounded-full text-white py-3 px-4 rounded b-solid b-none transition-colors text-nowrap w-min font-bold bg-green-500 hover:bg-green-600" @click="openBetaModal">
							Sign Up for Beta
						</button>
						<p class="text-neutral">
							200 spots left
						</p>
					</div>
				</div>
			</section>

			<!-- Installation Steps Section -->
			<section class="mb-12">
				<h2 class="text-3xl font-bold text-primary mb-4 text-center">
					Installation Instructions
				</h2>
				<div class="flex flex-col gap-4">
					<div class="bg-secondary p-6 rounded-lg shadow-lg flex gap-2">
						<div class="flex-grow">
							<h3 class="font-semibold text-lg">
								For Chromium-based Browsers:
							</h3>
							<ol class="list-decimal pl-4 line-height-5.5">
								<li>Download the PreMiD-Chromium.zip file from our beta or alpha builds.</li>
								<li>Navigate to chrome://extensions/ and activate Developer Mode.</li>
								<li>Drag and drop the PreMiD-Chromium.zip file onto the extensions page.</li>
								<li>Remove any previous versions of the PreMiD extension if installed.</li>
							</ol>
						</div>
						<FAIcon icon="fab fa-chrome" class="text-3xl text-gray-800" />
						<FAIcon icon="fab fa-brave" class="text-3xl text-gray-800" />
						<FAIcon icon="fab fa-edge" class="text-3xl text-gray-800" />
						<FAIcon icon="fab fa-opera" class="text-3xl text-gray-800" />
					</div>

					<div class="bg-secondary p-6 rounded-lg shadow-lg flex gap-2">
						<div class="flex-grow">
							<h3 class="font-semibold text-lg">
								For Firefox:
							</h3>
							<ol class="list-decimal pl-4 line-height-5.5">
								<li>Download the PreMiD-Firefox.zip file from our beta or alpha builds.</li>
								<li>Open about:debugging#/runtime/this-firefox, then click 'Load Temporary Add-on…'.</li>
								<li>Select the PreMiD-Firefox.zip file you downloaded.</li>
								<li>Ensure any previous versions of the PreMiD extension are removed.</li>
							</ol>
						</div>
						<FAIcon icon="fab fa-firefox" class="text-3xl text-gray-800" />
					</div>
				</div>
			</section>

			<!-- Discord Community Section -->
			<section class="text-center mx-auto max-w-screen-md">
				<h2 class="text-3xl font-bold text-primary mb-4">
					Feedback and Support
				</h2>
				<p class="text-lg mb-10">
					Join our Discord community. We have dedicated channels for support, bug reports, feature suggestions, and general questions.
				</p>
				<a href="https://discord.premid.app" target="_blank" class="bg-primary hover:bg-primary-highlight text-white font-bold px-4 rounded-full b-solid b-none transition-colors py-4">
					Join our Discord Community
				</a>
			</section>
		</div>
	</div>
</template>
